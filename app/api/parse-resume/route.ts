import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('resume'); // Retrieved but not used

        if (!file) {
            return NextResponse.json({ error: 'No resume file provided' }, { status: 400 });
        }

        // Use the file here (even if just logging for now)
        console.log('Received file:', file);

        // Mock response - replace with actual resume parsing logic
        const mockAnalysis = {
            detectedCountry: 'Venezuela',
            detectedIndustry: 'Data Science',
            skills: ['JavaScript', 'React', 'Node.js']
        };

        return NextResponse.json(mockAnalysis);
    } catch (error) {
        console.error('Error parsing resume:', error); // Now using error
        return NextResponse.json({ error: 'Failed to parse resume' }, { status: 500 });
    }
}
