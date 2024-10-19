import { Button } from "@/components/ui/button";
import {
  Sheet,
  //   SheetClose,
  SheetContent,
  //   SheetDescription,
  //   SheetFooter,
  //   SheetHeader,
  //   SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { BriefcaseBusiness } from "lucide-react";

// Hardcoded values for the card
const name_surname = "John Smith";
const description =
  "Deploy your new project in one-click. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni delectus repellendus maiores! Excepturi nostrum aliquid iste ipsa eveniet neque.";
const formFields = {
  city: "Taraz",
  profession: "Software Engineer",
  experience: "3 years",
  skills: "React, Next.js, TypeScript",
  email: "john.smith@example.com",
  phone_number: "+7 777 777 77 77",
  telegram: "username"
};

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className="m-2">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{name_surname}</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">{formFields.profession}</Label>
                  <Label htmlFor="name">{formFields.city}</Label>
                  <div className="flex items-center gap-2">
                    <BriefcaseBusiness size={20} />
                    <Label htmlFor="name">{formFields.experience}</Label>
                  </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">{formFields.skills}</Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button className="w-full">Message</Button>
          </CardFooter>
        </Card>
        {/* </Button> */}
      </SheetTrigger>

      <SheetContent>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>{name_surname}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">{formFields.city}</Label>
                  <Label htmlFor="name">{formFields.profession}</Label>
                  <Label htmlFor="name">{formFields.experience}</Label>
                  <Label htmlFor="name">{formFields.skills}</Label>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">{formFields.email}</Label>
                  <Label htmlFor="name">{formFields.phone_number}</Label>
                  <Label htmlFor="name">{formFields.telegram}</Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center items-center">
            <Button className="w-full">Message</Button>
          </CardFooter>
        </Card>
      </SheetContent>
    </Sheet>
  );
}
