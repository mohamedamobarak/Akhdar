import { Button } from "@/components/ui/button"


const TrackYourCarbon = () => {
  return (
    <section className=" p-8 md:p-14 lg:p-28 flex flex-col items-center max-w-4xl md:max-w-5xl  lg:max-w-6xl mx-auto my-12">
      <h3 className="font-medium text-black text-center text-3xl max-w-xl my-12">Track your carbon, support climate action, and sell sustainably.</h3>
      <Button className='bg-main text-center text-black hover:bg-primary cursor-pointer px-16 py-5 hover:text-white translation-color '>Talk to Us</Button>
    </section>
  )
}

export default TrackYourCarbon
