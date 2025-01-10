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

type Trigger = {
  id: string;
  keyword: string;
  response: string;
  priority: number;
};

const initialTriggers: Trigger[] = [
  {
    id: "1",
    keyword: "price",
    response:
      "Our pricing starts at $9.99 per month. Would you like more details?",
    priority: 1,
  },
  {
    id: "2",
    keyword: "shipping",
    response:
      "We offer free shipping on orders over $50. Standard shipping is $5.99.",
    priority: 2,
  },
  {
    id: "3",
    keyword: "return policy",
    response:
      "We have a 30-day return policy for all unused items. Would you like more information?",
    priority: 3,
  },
];

export function KeywordTriggers() {
  const [triggers, setTriggers] = useState<Trigger[]>(initialTriggers);
  const [editingTrigger, setEditingTrigger] = useState<Trigger | null>(null);

  const handleEdit = (trigger: Trigger) => {
    setEditingTrigger(trigger);
  };

  const handleSave = (updatedTrigger: Trigger) => {
    setTriggers(
      triggers.map((t) => (t.id === updatedTrigger.id ? updatedTrigger : t))
    );
    setEditingTrigger(null);
  };

  const handleDelete = (id: string) => {
    setTriggers(triggers.filter((t) => t.id !== id));
  };

  const handleAdd = () => {
    const newTrigger: Trigger = {
      id: Date.now().toString(),
      keyword: "",
      response: "",
      priority: triggers.length + 1,
    };
    setTriggers([...triggers, newTrigger]);
    setEditingTrigger(newTrigger);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Keyword Triggers</h2>
        <Button onClick={handleAdd}>
          <Plus className="mr-2 h-4 w-4" /> Add Trigger
        </Button>
      </div>
      <div className="space-y-4">
        {triggers.map((trigger) => (
          <Card key={trigger.id}>
            <CardHeader>
              <CardTitle>{trigger.keyword}</CardTitle>
              <CardDescription>Priority: {trigger.priority}</CardDescription>
            </CardHeader>
            <CardContent>
              {editingTrigger?.id === trigger.id ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor={`keyword-${trigger.id}`}>Keyword</Label>
                    <Input
                      id={`keyword-${trigger.id}`}
                      value={editingTrigger.keyword}
                      onChange={(e) =>
                        setEditingTrigger({
                          ...editingTrigger,
                          keyword: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`response-${trigger.id}`}>Response</Label>
                    <Textarea
                      id={`response-${trigger.id}`}
                      value={editingTrigger.response}
                      onChange={(e) =>
                        setEditingTrigger({
                          ...editingTrigger,
                          response: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`priority-${trigger.id}`}>Priority</Label>
                    <Input
                      id={`priority-${trigger.id}`}
                      type="number"
                      value={editingTrigger.priority}
                      onChange={(e) =>
                        setEditingTrigger({
                          ...editingTrigger,
                          priority: parseInt(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
              ) : (
                <p className="text-sm">{trigger.response}</p>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              {editingTrigger?.id === trigger.id ? (
                <Button onClick={() => handleSave(editingTrigger)}>Save</Button>
              ) : (
                <Button variant="outline" onClick={() => handleEdit(trigger)}>
                  <Pencil className="mr-2 h-4 w-4" /> Edit
                </Button>
              )}
              <Button
                variant="destructive"
                onClick={() => handleDelete(trigger.id)}
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
