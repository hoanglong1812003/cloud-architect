/**
 * AUTO-LOAD QUESTIONS SYSTEM
 * Automatically discovers and loads all question sets and questions
 * No need to manually edit HTML files when adding new question sets
 */

// Configuration
const CONFIG = {
    maxSets: 20,           // Maximum number of sets to scan
    questionsPerSet: 10,   // Number of questions per set
    setFolderPrefix: 'Question Set ',
    debug: true            // Enable console logging
};

// Global storage for all question sets
window.allQuestionSets = {};
window.questionSetsMetadata = {
    totalSets: 0,
    loadedSets: [],
    errors: []
};

/**
 * Dynamically load a JavaScript file
 */
function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(src);
        script.onerror = () => reject(new Error(`Failed to load: ${src}`));
        document.head.appendChild(script);
    });
}

/**
 * Try to load a single question file
 */
async function tryLoadQuestion(setNumber, questionNumber) {
    const path = `${CONFIG.setFolderPrefix}${setNumber}/question${questionNumber}.js`;
    try {
        await loadScript(path);
        if (CONFIG.debug) {
            console.log(`✅ Loaded: Set ${setNumber}, Question ${questionNumber}`);
        }
        return true;
    } catch (error) {
        if (CONFIG.debug) {
            console.log(`⚠️  Not found: ${path}`);
        }
        return false;
    }
}

/**
 * Try to load all questions in a set
 */
async function tryLoadQuestionSet(setNumber) {
    const loadedQuestions = [];
    
    for (let q = 1; q <= CONFIG.questionsPerSet; q++) {
        const loaded = await tryLoadQuestion(setNumber, q);
        if (loaded) {
            loadedQuestions.push(q);
        }
    }
    
    // Check if namespace exists (means at least one question was loaded)
    const namespace = window[`questionSet${setNumber}`];
    if (namespace && Object.keys(namespace).length > 0) {
        return {
            setNumber: setNumber,
            questionCount: Object.keys(namespace).length,
            questions: loadedQuestions
        };
    }
    
    return null;
}

/**
 * Initialize all question set namespaces
 */
function initializeNamespaces() {
    for (let i = 1; i <= CONFIG.maxSets; i++) {
        window[`questionSet${i}`] = {};
    }
    if (CONFIG.debug) {
        console.log(`📦 Initialized ${CONFIG.maxSets} question set namespaces`);
    }
}

/**
 * Main function to auto-discover and load all question sets
 */
async function autoLoadAllQuestions() {
    console.log('🔍 Starting auto-discovery of question sets...');
    
    // Initialize namespaces
    initializeNamespaces();
    
    const loadedSets = [];
    
    // Try to load each set
    for (let setNum = 1; setNum <= CONFIG.maxSets; setNum++) {
        const setInfo = await tryLoadQuestionSet(setNum);
        
        if (setInfo) {
            loadedSets.push(setInfo);
            window.allQuestionSets[setNum] = window[`questionSet${setNum}`];
            console.log(`✅ Set ${setNum}: Loaded ${setInfo.questionCount} questions`);
        } else {
            // If no questions found in this set, stop scanning
            if (loadedSets.length > 0 && setNum > loadedSets.length + 1) {
                if (CONFIG.debug) {
                    console.log(`⏹️  Stopped scanning at Set ${setNum} (no more sets found)`);
                }
                break;
            }
        }
    }
    
    // Update metadata
    window.questionSetsMetadata.totalSets = loadedSets.length;
    window.questionSetsMetadata.loadedSets = loadedSets;
    
    console.log(`✅ Auto-discovery complete! Found ${loadedSets.length} question sets`);
    console.log('📊 Summary:', loadedSets);
    
    // Trigger custom event to notify that data is ready
    const event = new CustomEvent('questionsLoaded', {
        detail: {
            totalSets: loadedSets.length,
            sets: loadedSets
        }
    });
    document.dispatchEvent(event);
    
    return loadedSets;
}

// Export for use in other scripts
window.autoLoadAllQuestions = autoLoadAllQuestions;

console.log('✅ Auto-load system initialized');
