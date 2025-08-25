import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
    {
        id: "faq-1",
        question: "How do I book a ride?",
        answer:
            "To book a ride, simply enter your pickup and drop-off locations, choose your preferred ride type, and confirm the booking in the app.",
    },
    {
        id: "faq-2",
        question: "Can I schedule a ride in advance?",
        answer:
            "Yes, you can schedule rides in advance by selecting the 'Schedule Ride' option and choosing your desired date and time.",
    },
    {
        id: "faq-3",
        question: "How do I pay for my ride?",
        answer:
            "You can pay using various methods such as credit/debit cards, mobile wallets, or cash, depending on the options available in your area.",
    },
    {
        id: "faq-4",
        question: "What if my driver doesn’t show up?",
        answer:
            "If your driver doesn’t arrive, you can cancel the ride free of charge and book another driver instantly from the app.",
    },
    {
        id: "faq-5",
        question: "How is the fare calculated?",
        answer:
            "Fares are calculated based on the distance, time, and ride type you choose. Additional charges may apply for tolls, peak hours, or waiting time.",
    },
    {
        id: "faq-6",
        question: "Is my payment information safe?",
        answer:
            "Yes, all payments are processed securely with encrypted systems to ensure your financial information is always protected.",
    },
    {
        id: "faq-7",
        question: "What should I do if I left an item in the car?",
        answer:
            "You can report lost items directly in the app, and we will help you connect with your driver to recover them.",
    },
    {
        id: "faq-8",
        question: "Can I cancel my ride?",
        answer:
            "Yes, you can cancel a ride anytime before it starts. However, a cancellation fee may apply if the driver is already on the way.",
    },
    {
        id: "faq-9",
        question: "How do you ensure passenger safety?",
        answer:
            "All drivers go through background checks, vehicle inspections, and our rides are tracked in real-time for safety. Emergency support is also available in the app.",
    },
    {
        id: "faq-10",
        question: "Can I choose a specific driver?",
        answer:
            "Currently, drivers are assigned automatically based on availability, but you can rate and favorite drivers for better future matching.",
    },
];


const Faq = ({
    heading = "Frequently asked questions",
    description = "Find answers to common questions about our products. Can't find what you're looking for? Contact our support team.",
    items = faqItems,
}) => {
    return (
        <section className="py-32 px-4">
            <div className="container mx-auto space-y-16">
                <div className="mx-auto flex max-w-3xl flex-col text-left md:text-center">
                    <h2 className="mb-3 text-3xl font-semibold md:mb-4 lg:mb-6 lg:text-4xl">
                        {heading}
                    </h2>
                    <p className="text-muted-foreground lg:text-lg">{description}</p>
                </div>
                <Accordion
                    type="single"
                    collapsible
                    className="mx-auto w-full lg:max-w-3xl"
                >
                    {items.map((item) => (
                        <AccordionItem key={item.id} value={item.id}>
                            <AccordionTrigger className="transition-opacity duration-200 hover:no-underline hover:opacity-60">
                                <div className="font-medium sm:py-1 lg:py-2 lg:text-lg">
                                    {item.question}
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="sm:mb-1 lg:mb-2">
                                <div className="text-muted-foreground lg:text-lg">
                                    {item.answer}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default Faq;