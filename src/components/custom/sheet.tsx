import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Label } from "../ui/label"
import { BriefcaseBusiness } from "lucide-react"

// Hardcoded values for the card
const title = "Account manager from 500k"
const description =
  "Deploy your new project in one-click. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni delectus repellendus maiores! Excepturi nostrum aliquid iste ipsa eveniet neque."
const formFields = {
  label1: "Taraz",
  label2: "Kolesa",
  label3: "Без опыта",
  label4: "Released yesterday",
}

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild className='m-2'>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className='grid w-full items-center gap-4'>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>{formFields.label1}</Label>
                  <Label htmlFor='name'>{formFields.label2}</Label>
                  <div className='flex items-center gap-2'>
                    <BriefcaseBusiness size={20} />
                    <Label htmlFor='name'>{formFields.label3}</Label>
                  </div>
                </div>
                <div className='flex flex-col space-y-1.5'>
                  <Label htmlFor='name'>{formFields.label4}</Label>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className='flex justify-center items-center'>
            <Button className='w-full'>Apply</Button>
          </CardFooter>
        </Card>
        {/* </Button> */}
      </SheetTrigger>

      <SheetContent className='h-4/5 overflow-y-auto'>
        <SheetHeader>
          <SheetTitle>
            <div className='text-2xl font-bold'>{title}</div>
          </SheetTitle>
          <SheetDescription>
            <div className='text-lg'>{description}</div>

            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-2'>
                <Label htmlFor='name' className='text-lg font-semibold'>
                  {formFields.label1}
                </Label>
                <Label htmlFor='name' className='text-lg font-semibold'>
                  {formFields.label2}
                </Label>
                <div className='flex items-center gap-2'>
                  <BriefcaseBusiness size={24} className='text-blue-500' />
                  <Label htmlFor='name' className='text-lg font-semibold'>
                    {formFields.label3}
                  </Label>
                </div>
              </div>
              <div className='flex flex-col space-y-2'>
                <Label htmlFor='name' className='text-lg font-semibold'>
                  {formFields.label4}
                </Label>
              </div>
            </div>

            <Button className='w-full'>Apply</Button>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
