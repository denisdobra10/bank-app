import BookingFormular from '../components/booking/booking-formular';

function ProgramarePage() {


    return (
        <div className='flex flex-col w-full min-h-[80vh] py-16 text-center gap-8 items-center'>

            <h1 className='text-paragraph text-5xl font-bold'>Programare online</h1>

            <BookingFormular />

        </div>
    )
}

export default ProgramarePage