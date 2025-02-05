import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { BarChart, Clock, Briefcase, Award, Book } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <BarChart className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">Profile Completion</p>
                <p className="text-2xl font-bold">85%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-8 h-8 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">Job Matches</p>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Award className="w-8 h-8 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">Skills Verified</p>
                <p className="text-2xl font-bold">8/10</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-8 h-8 text-orange-500" />
              <div>
                <p className="text-sm text-gray-600">Tasks Due</p>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recommended Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map(job => (
                <div key={job} className="p-4 border rounded-lg hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Senior Developer</h3>
                      <p className="text-sm text-gray-600">TechCorp Inc.</p>
                      <p className="text-sm text-gray-600">Vancouver, BC</p>
                    </div>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                      Apply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Book className="w-5 h-5 text-blue-500" />
                <span>Complete English Assessment</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-blue-500" />
                <span>Upload Degree Certificate</span>
              </div>
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-blue-500" />
                <span>Update Work History</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
