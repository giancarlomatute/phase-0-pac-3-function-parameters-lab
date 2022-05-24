function introduction(Aki) {
    return `Hi, my name is ${Aki}.`
}
function introductionWithLanguage(Aki, language) {
    return `Hi, my name is ${Aki} and I am learning to program in ${language}.`
}
function introductionWithLanguageOptional(Aki, language  = "JavaScript") {
    return `Hi, my name is ${Aki} and I am learning to program in ${language}.`
}