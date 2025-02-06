```mermaid
graph TD
    %% Define the nodes with styles for color coding
    A[Sign Up]:::start --> B[Create Profile]:::step
    B --> C[Upload Resume]:::step
    C --> D[Credentials Extraction & Translation]:::process
    
    B --> E[Complete Skills Assessment]:::step
    E --> F[Career Path Recommendations]:::process
    
    D --> G[Job Matching]:::process
    F --> G
    
    G --> H[Application Process]:::action
    
    subgraph "Ongoing Support"
        K[Language Training]:::support
        L[Professional Development]:::support
        M[Mentorship]:::support
    end
    
    H --> K
    H --> L
    H --> M
    
    %% External box for Partnership Programs
    P[Partnership Programs]:::external --> G

    %% Define styles for each class with more muted colors
    classDef start fill:#5fae6e,stroke:#4b8c4b,color:white;
    classDef step fill:#7fa6c1,stroke:#6f8fbd,color:white;
    classDef process fill:#f2c94c,stroke:#e1ad2d,color:white;
    classDef action fill:#e77471,stroke:#e25d4f,color:white;
    classDef support fill:#a1c9a5,stroke:#86b67d,color:white;
    classDef external fill:#b58bd1,stroke:#9a73a3,color:white;