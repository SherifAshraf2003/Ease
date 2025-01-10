"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2 } from "lucide-react";

type Template = {
  id: string;
  name: string;
  content: string;
  usage: number;
};

const initialTemplates: Template[] = [
  {
    id: "1",
    name: "Welcome Message",
    content: "Welcome to our community! How can we assist you today?",
    usage: 245,
  },
  {
    id: "2",
    name: "Thank You",
    content: "Thank you for your feedback! We appreciate your input.",
    usage: 189,
  },
  {
    id: "3",
    name: "Product Inquiry",
    content:
      "Thank you for your interest in our product. What specific features are you looking for?",
    usage: 156,
  },
];

export function Templates() {
  const [templates, setTemplates] = useState<Template[]>(initialTemplates);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);

  const handleEdit = (template: Template) => {
    setEditingTemplate(template);
  };

  const handleSave = (updatedTemplate: Template) => {
    setTemplates(
      templates.map((t) => (t.id === updatedTemplate.id ? updatedTemplate : t))
    );
    setEditingTemplate(null);
  };

  const handleDelete = (id: string) => {
    setTemplates(templates.filter((t) => t.id !== id));
  };

  const handleAdd = () => {
    const newTemplate: Template = {
      id: Date.now().toString(),
      name: "New Template",
      content: "",
      usage: 0,
    };
    setTemplates([...templates, newTemplate]);
    setEditingTemplate(newTemplate);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Response Templates</h2>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Template
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id}>
            <CardHeader>
              <CardTitle>{template.name}</CardTitle>
              <CardDescription>Used {template.usage} times</CardDescription>
            </CardHeader>
            <CardContent>
              {editingTemplate?.id === template.id ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`name-${template.id}`}>Name</Label>
                    <Input
                      id={`name-${template.id}`}
                      value={editingTemplate.name}
                      onChange={(e) =>
                        setEditingTemplate({
                          ...editingTemplate,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`content-${template.id}`}>Content</Label>
                    <Textarea
                      id={`content-${template.id}`}
                      value={editingTemplate.content}
                      onChange={(e) =>
                        setEditingTemplate({
                          ...editingTemplate,
                          content: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
              ) : (
                <p className="text-sm">{template.content}</p>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {editingTemplate?.id === template.id ? (
                <Button onClick={() => handleSave(editingTemplate)}>
                  Save
                </Button>
              ) : (
                <Button variant="outline" onClick={() => handleEdit(template)}>
                  <Pencil className="mr-2 h-4 w-4" /> Edit
                </Button>
              )}
              <Button
                variant="destructive"
                onClick={() => handleDelete(template.id)}
              >
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
