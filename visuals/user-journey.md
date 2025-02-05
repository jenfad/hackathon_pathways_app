```mermaid
graph TD
    A[Sign Up] --> B[Initial Profile Creation]
    B --> C[Document Upload]
    C --> D[Credential Assessment]
    
    B --> E[Skills Assessment]
    E --> F[Career Path Recommendations]
    
    D --> G[Job Matching]
    F --> G
    
    G --> H[Application Process]
    H --> I[Interview Preparation]
    I --> J[Job Placement]
    
    subgraph "Ongoing Support"
        K[Language Training]
        L[Professional Development]
        M[Mentorship]
    end
    
    G --> K
    G --> L
    G --> M
