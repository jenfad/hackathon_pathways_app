import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('resume');

        // Mock response - replace with actual resume parsing logic
        const mockAnalysis = {
            detectedCountry: 'India',
            detectedIndustry: 'Technology',
            skills: ['JavaScript', 'React', 'Node.js']
        };

        return NextResponse.json(mockAnalysis);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to parse resume' }, { status: 500 });
    }
}