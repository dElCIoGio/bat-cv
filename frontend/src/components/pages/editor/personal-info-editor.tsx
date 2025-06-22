"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { FormData } from "@/app/page"

interface PersonalInfoEditorProps {
    open: boolean
    formData: FormData
    onSave: (data: Partial<FormData>) => void
    onClose: () => void
}

export default function PersonalInfoEditor({ open, formData, onSave, onClose }: PersonalInfoEditorProps) {
    const [localData, setLocalData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        location: "",
        goal: "",
    })

    useEffect(() => {
        if (open && formData) {
            setLocalData({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                location: formData.location,
                goal: formData.goal,
            })
        }
    }, [open, formData])

    const handleSave = () => {
        onSave(localData)
        onClose()
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Edit Personal Information</DialogTitle>
                </DialogHeader>

                <div className="space-y-6 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input
                                id="firstName"
                                value={localData.firstName}
                                onChange={(e) => setLocalData({ ...localData, firstName: e.target.value })}
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input
                                id="lastName"
                                value={localData.lastName}
                                onChange={(e) => setLocalData({ ...localData, lastName: e.target.value })}
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                type="email"
                                value={localData.email}
                                onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                value={localData.phone}
                                onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
                                placeholder="+1 (555) 123-4567"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                            id="location"
                            value={localData.location}
                            onChange={(e) => setLocalData({ ...localData, location: e.target.value })}
                            placeholder="City, State, Country"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="goal">Career Goal</Label>
                        <Textarea
                            id="goal"
                            value={localData.goal}
                            onChange={(e) => setLocalData({ ...localData, goal: e.target.value })}
                            placeholder="What is your primary career objective?"
                            rows={3}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleSave}>Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
