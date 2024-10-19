"use client"
import React, { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  //   CardDescription,
} from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"
import { Label } from "@radix-ui/react-label"
import Switcher from "@/components/custom/switcher"

const initialProfile = {
  name_surname: "Ernur",
  profession: "Management",
  gender: "Male",
  date_of_birth: "12.12.2000",
  skills: "Organization, Problem Solving, Multitask",
  experience: "3 years",
  email: "email@.com",
  phone_number: "+7 777 777 77 77",
}

function Profile() {
  const [profile, setProfile] = useState(initialProfile)
  const [photo, setPhoto] = useState<string | null>(null)
  const [resume, setResume] = useState<File | null>(null)

  const [isHR, setIsHR] = useState(false)

  const handleRoleSelection = (role: string) => {
    // Save role in localStorage
    localStorage.setItem("userRole", role)

    // Optionally trigger redirect based on role
    if (role === "employer") {
      setIsHR(true) // Redirect to HR section
    } else {
      setIsHR(false) // Redirect to employee or default section
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile({ ...profile, [name]: value })
  }

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedPhoto = URL.createObjectURL(e.target.files[0])
      setPhoto(selectedPhoto)
    }
  }

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0])
    }
  }

  const handleSave = () => {
    console.log("Profile updated:", profile)
    alert("Profile saved successfully!")
  }

  return (
    <div>
      <div className={`${!isHR ? "hidden" : ""}`}>HR</div>
      <div className={`p-4 space-y-6 ${isHR ? "hidden" : ""}`}>
        <div className='flex space-x-4'>
          <div className='w-32 h-32 rounded-lg overflow-hidden bg-gray-200'>
            {photo ? (
              <Image src={photo} alt='Profile' width={128} height={128} />
            ) : (
              <div className='flex items-center justify-center h-full text-gray-500'>No photo</div>
            )}
          </div>

          <div>
            <div className='text-xl font-bold'>{profile.name_surname}</div>
            <div>{profile.profession}</div>
            <div>{profile.gender}</div>
            <div>{profile.date_of_birth}</div>
            <div>{profile.skills}</div>
            <div>{profile.experience}</div>
          </div>

          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>Edit</Button>
              </DialogTrigger>

              <DialogContent className='max-h-[90vh] overflow-y-auto'>
                <Card className='w-full '>
                  <CardHeader className='gap-2'>
                    <CardTitle>Edit Profile</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form className='space-y-4'>
                      <div>
                        <Label>Profile Photo</Label>
                        <input type='file' accept='image/*' onChange={handlePhotoUpload} />
                      </div>

                      <div className='grid gap-4'>
                        <div className='gap-2 border border-gray-300 p-2 rounded'>
                          <Label>Name</Label>
                          <input
                            type='text'
                            name='name_surname'
                            value={profile.name_surname}
                            onChange={handleInputChange}
                            className='input w-full border p-1 rounded'
                          />
                        </div>
                        <div className='gap-2 border border-gray-300 p-2 rounded'>
                          <Label>Profession</Label>
                          <input
                            type='text'
                            name='profession'
                            value={profile.profession}
                            onChange={handleInputChange}
                            className='input w-full border p-1 rounded'
                          />
                        </div>
                      </div>

                      <div className='grid gap-4'>
                        <div className='gap-2 border border-gray-300 p-2 rounded'>
                          <Label>Gender</Label>
                          <input
                            type='text'
                            name='gender'
                            value={profile.gender}
                            onChange={handleInputChange}
                            className='input w-full border p-1 rounded'
                          />
                        </div>
                        <div className='gap-2 border border-gray-300 p-2 rounded'>
                          <Label>Date of Birth</Label>
                          <input
                            type='text'
                            name='date_of_birth'
                            value={profile.date_of_birth}
                            onChange={handleInputChange}
                            className='input w-full border p-1 rounded'
                          />
                        </div>
                      </div>

                      <div className='grid gap-4'>
                        <div className='gap-2 border border-gray-300 p-2 rounded'>
                          <Label>Skills</Label>
                          <input
                            type='text'
                            name='skills'
                            value={profile.skills}
                            onChange={handleInputChange}
                            className='input w-full border p-1 rounded'
                          />
                        </div>
                        <div className='gap-2 border border-gray-300 p-2 rounded'>
                          <Label>Experience</Label>
                          <input
                            type='text'
                            name='experience'
                            value={profile.experience}
                            onChange={handleInputChange}
                            className='input w-full border p-1 rounded'
                          />
                        </div>
                        <div className='gap-2 border border-gray-300 p-2 rounded'>
                          <Label>email</Label>
                          <input
                            type='text'
                            name='experience'
                            value={profile.email}
                            onChange={handleInputChange}
                            className='input w-full border p-1 rounded'
                          />
                        </div>
                        <div className='gap-2 border border-gray-300 p-2 rounded'>
                          <Label>phone number</Label>
                          <input
                            type='text'
                            name='experience'
                            value={profile.phone_number}
                            onChange={handleInputChange}
                            className='input w-full border p-1 rounded'
                          />
                        </div>
                      </div>

                      <div className='gap-2 border border-gray-300 p-2 rounded'>
                        <Label>Resume</Label>
                        <input
                          type='file'
                          accept='.pdf,.docx'
                          onChange={handleResumeUpload}
                          className='w-full border p-1 rounded'
                        />
                        {resume && <p>{resume.name}</p>}
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter className='flex justify-center items-center'>
                    <Button className='w-full' onClick={handleSave}>
                      Save
                    </Button>
                  </CardFooter>
                </Card>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div>
          <Switcher onSelectRole={handleRoleSelection} />
        </div>
      </div>
    </div>
  )
}

export default Profile
