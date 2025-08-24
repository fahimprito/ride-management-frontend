import { Button } from "@/components/ui/button";

interface AboutPageProps {
    title?: string;
    description?: string;
    missionTitle?: string;
    missionDescription?: string;
    teamTitle?: string;
    teamDescription?: string;
    team?: Array<{
        name: string;
        role: string;
        image: string;
    }>;
}

const defaultTeam = [
    {
        name: "Fahim Ahmmed",
        role: "CEO & Founder",
        image: "https://i.ibb.co.com/RGGWwDzk/440234303-3708442566094948-5517295150525001309-n.jpg",
    },
    {
        name: "Michael Smith",
        role: "CTO",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Sophia Martinez",
        role: "Head of Design",
        image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
        name: "Daniel Lee",
        role: "Lead Engineer",
        image: "https://randomuser.me/api/portraits/men/76.jpg",
    },
];

const About = ({
    title = "About Us",
    description = "RideStation is a customer-first ride booking platform designed to make travel simple, safe, and reliable. We believe in connecting people through seamless mobility solutions that bring comfort and trust to every journey.",
    missionTitle = "Our Mission",
    missionDescription = "Our mission is to revolutionize urban transportation by offering affordable, secure, and technology-driven ride experiences. We aim to reduce travel stress, empower local drivers, and ensure sustainability through smarter ride-sharing options.",
    teamTitle = "Meet Our Team",
    teamDescription = "Behind RideStation is a diverse and passionate team committed to innovation, safety, and service excellence.",
    team = defaultTeam,
}: AboutPageProps = {}) => {
    return (
        <section className="py-24">
            <div className="container mx-auto">
                <div className="mb-16 text-center">
                    <h1 className="text-5xl font-semibold">{title}</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                        {description}
                    </p>
                </div>

                <div className="mb-20 grid gap-8 md:grid-cols-2 items-center">
                    <div>
                        <h2 className="text-4xl font-semibold">{missionTitle}</h2>
                        <p className="mt-4 text-muted-foreground">{missionDescription}</p>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1657681903555-b853d9023a1c"
                        alt="Mission"
                        className="rounded-xl object-cover w-full h-80 dark:brightness-[0.8]"
                    />
                </div>

                <div>
                    <h2 className="text-4xl font-semibold text-center">{teamTitle}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                        {teamDescription}
                    </p>

                    <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                        {team.map((member, idx) => (
                            <div
                                key={member.name + idx}
                                className="flex flex-col items-center text-center gap-4"
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-full object-cover shadow-md"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold">{member.name}</h3>
                                    <p className="text-muted-foreground">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 text-center">
                    <Button asChild>
                        <a href="/contact">Get in Touch</a>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default About;