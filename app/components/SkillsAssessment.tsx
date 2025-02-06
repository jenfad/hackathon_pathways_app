import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Upload } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

const SkillsAssessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [parsedResume, setParsedResume] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Venezuela');
  const [selectedIndustry, setSelectedIndustry] = useState('Data Science');
  const [documentUrl, setDocumentUrl] = useState('');

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia',
    'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin',
    'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi',
    'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia',
    'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Democratic Republic of the Congo',
    'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea',
    'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany',
    'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary',
    'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan',
    'Kenya', 'Kiribati', 'Korea (North)', 'Korea (South)', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho',
    'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali',
    'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro',
    'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger',
    'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru',
    'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Helena', 'Saint Kitts and Nevis',
    'Saint Lucia', 'Saint Pierre and Miquelon', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe',
    'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands',
    'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland',
    'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia',
    'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States',
    'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];
  const industries = [
    'Advertising', 'Agriculture', 'Aerospace', 'Automotive', 'Biotechnology', 'Construction', 'Consulting', 'Education',
    'Energy', 'Entertainment', 'Fashion', 'Finance', 'Food and Beverage', 'Government', 'Healthcare', 'Hospitality',
    'Insurance', 'Information Technology', 'Legal', 'Logistics', 'Manufacturing', 'Media', 'Nonprofit', 'Pharmaceutical',
    'Real Estate', 'Retail', 'Sports', 'Telecommunications', 'Tourism', 'Transportation', 'Video Games', 'Web Development',
    'Software Development', 'Cloud Computing', 'Artificial Intelligence', 'Cybersecurity', 'Data Science',
    'E-commerce', 'Other'
  ];

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Use optional chaining to prevent potential errors
    if (!file) return;

    setIsUploading(true);
    try {
      // Create URL for document preview
      const fileUrl = URL.createObjectURL(file);
      setDocumentUrl(fileUrl);

      const formData = new FormData();
      formData.append('resume', file);

      const response = await fetch('/api/parse-resume', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setParsedResume(data);
      //setSelectedCountry(data.detectedCountry || ''); instead hardcoding for now...
      //setSelectedIndustry(data.detectedIndustry || '');
    } catch (error) {
      console.error('Error parsing resume:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const renderDocumentPreview = () => {
    if (!documentUrl) return null;

    return (
      <div className="mt-6 border rounded-lg overflow-hidden" style={{ height: '500px' }}>
        <object
          data={documentUrl}
          type="application/pdf"
          className="w-full h-full"
        >
          <iframe
            src={documentUrl}
            className="w-full h-full"
            title="Document preview"
          >
            This browser does not support PDFs. Please download the PDF to view it.
          </iframe>
        </object>
      </div>
    );
  };

  const categories = [
    {
      name: "Technical Skills",
      questions: [
        "What programming languages are you proficient in?",
        "Which software tools have you used professionally?",
        "Describe your experience with databases"
      ]
    },
    {
      name: "Soft Skills",
      questions: [
        "How do you handle conflict in the workplace?",
        "Describe a successful team project you led",
        "How do you approach problem-solving?"
      ]
    },
    {
      name: "Industry Knowledge",
      questions: [
        "What industry certifications do you hold?",
        "Describe your experience in your field",
        "What are your areas of specialization?"
      ]
    }
  ];

  const renderCurrentStep = () => {
    if (currentStep === 1) {
      return (
        <div className="space-y-6">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
            <input
              type="file"
              id="resume"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
            />
            <label
              htmlFor="resume"
              className="cursor-pointer flex flex-col items-center space-y-2"
            >
              <Upload className="h-8 w-8 text-gray-400" />
              <span className="text-sm text-gray-500">
                {isUploading ? 'Analyzing...' : 'Upload your resume (PDF, DOC, DOCX)'}
              </span>
            </label>
          </div>

          {renderDocumentPreview()}

          {parsedResume && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Country of Origin</label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map(country => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Primary Industry</label>
                  <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map(industry => (
                        <SelectItem key={industry} value={industry}>
                          {industry}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    return (
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">
          {categories[currentStep - 2].name}
        </h3>
        {categories[currentStep - 2].questions.map((question, idx) => (
          <div key={idx} className="space-y-2">
            <p className="font-medium">{question}</p>
            <textarea
              className="w-full p-2 border rounded-md h-24"
              placeholder="Enter your response..."
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Skills Assessment - Step {currentStep}/4</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3, 4].map(step => (
              <div
                key={step}
                className={`h-2 flex-1 rounded ${step <= currentStep ? 'bg-blue-500' : 'bg-gray-200'}`}
              />
            ))}
          </div>

          {renderCurrentStep()}

          <div className="flex justify-between mt-6">
            <button
              className={`px-4 py-2 rounded ${currentStep > 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button
              className={`px-4 py-2 rounded ${currentStep < 4 ? 'bg-blue-500 text-white' : 'bg-green-500 text-white'}`}
              onClick={() => {
                if (currentStep === 1 && !parsedResume) {
                  alert('Please upload a resume first');
                  return;
                }
                setCurrentStep(prev => Math.min(4, prev + 1));
              }}
            >
              {currentStep === 4 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillsAssessment;