export const Microservices : {[key: string]: string} = {
    // give like this : 
    // "ms-name" : "http://localhost:[port-no.]/[context-root]"
    "auth"      : "http://localhost:8100/auth",
    "benchmark" : "http://localhost:8300/benchmark",
    "checklist" : "http://localhost:8200/checklist",
    "severity"  : "http://localhost:8400/severity"
}