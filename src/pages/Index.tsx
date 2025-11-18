import { useState } from "react";
import CourseWeek from "@/components/CourseWeek";
import EnrollmentForm from "@/components/EnrollmentForm";
import ContactForm from "@/components/ContactForm";
import NotificationSignup from "@/components/NotificationSignup";

const Index = () => {
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [studentData, setStudentData] = useState<{
    name: string;
    email: string;
    experience: string;
  } | null>(null);

  const enrollmentOpen = (import.meta.env.VITE_ENROLLMENT_OPEN as string | undefined) === "true";

  const handleEnrollment = (data: { name: string; email: string; experience: string }) => {
    setStudentData(data);
    setIsEnrolled(true);
  };

  if (enrollmentOpen && !isEnrolled) {
    return <EnrollmentForm onEnroll={handleEnrollment} />;
  }
  const courseWeeks = [
    {
      weekNumber: 1,
      title: "Story Foundations & Idea Development",
      learningGoals: [
        "Understand what makes a strong short story",
        "Learn how to generate ideas fast",
        "Identify the core message or theme",
      ],
      topics: [
        "What is a short story? (Purpose, pacing, structure)",
        "How to find inspiration (real life, dreams, what-if questions)",
        'The "One Big Idea" rule for short films',
      ],
      activities: [
        "1–2 minute brainstorming drills",
        "Students pitch three short story ideas",
        "Group discussion: Which ideas have the strongest impact?",
      ],
      homework: "Choose ONE idea and expand it into a half-page concept.",
    },
    {
      weekNumber: 2,
      title: "Character Building & Motivation",
      learningGoals: [
        "Create characters that feel real",
        "Understand motivation, conflict, and stakes",
      ],
      topics: [
        "Protagonist, antagonist, and supporting roles",
        "What your character wants vs. what's in the way",
        "How to make the audience care quickly",
      ],
      activities: [
        "Character worksheet (Name, backstory, flaw, goal)",
        '"Introduce Your Character" presentations (30 seconds)',
      ],
      homework: "Write a one-page character profile for your main character.",
    },
    {
      weekNumber: 3,
      title: "Structure & Plot for Short Stories",
      learningGoals: [
        "Learn simple story structures perfect for short stories",
        "Organize events clearly and effectively",
      ],
      topics: [
        "3-Act Short Story Structure",
        "The 5 Beats: Setup, Conflict, Rising Action, Climax, Resolution",
        "How to keep pacing tight",
      ],
      activities: [
        "Plot out your story using a template",
        "Group feedback on structure choices",
      ],
      homework: "Write a one-page outline of your story (start → middle → end).",
    },
    {
      weekNumber: 4,
      title: "Scriptwriting & Dialogue",
      learningGoals: [
        "Convert story ideas into screenplay format",
        "Write meaningful dialogue and visual description",
      ],
      topics: [
        "Basic script formatting",
        "Showing vs. telling",
        "Writing dialogue that sounds natural",
      ],
      activities: [
        "Scriptwriting warm-up: Write a 30-second scene",
        "Peer review: Exchange scripts and give feedback",
      ],
      homework: "Write a 2–3 page script for your short story.",
    },
    {
      weekNumber: 5,
      title: "Storyboarding & Visual Planning",
      learningGoals: [
        "Learn how to visualize a short story",
        "Translate script scenes into shots and camera angles",
      ],
      topics: [
        "What is a storyboard?",
        "Shot types, framing, and composition",
        "Planning pacing through visuals",
      ],
      activities: [
        "Students create a 6–12 panel storyboard for one scene",
        'In-class share: "How I Want My Story to Look on Screen"',
      ],
      homework: "Complete a full storyboard or shot list for the entire story.",
    },
    {
      weekNumber: 6,
      title: "Final Project & Presentation",
      learningGoals: [
        "Put all learned skills together",
        "Present a complete short story package",
      ],
      topics: [],
      activities: [
        "Students present: Story concept, Characters, Plot, Script pages, Storyboard/visual plan",
        "Class feedback session",
        "Instructor closing notes on turning stories into films",
      ],
      homework: "",
      finalDeliverable: "A full short story package ready for production.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2djRoLTR2LTRoNHptLTh2NGgtNHYtNGg0em0tOCAwdi00aDR2NGgtNHptMjQgOHY0aC00di00aDR6bS04IDBoLTR2NGg0di00em0tOCAwdi00aDR2NGgtNHptOCAwdjRoLTR2LTRoNHptLTggMGgtNHY0aDR2LTR6bTggOGgtNHY0aDR2LTR6bTAgOHYtNGg0djRoLTR6bS04IDB2LTRoNHY0aC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-accent/30">
              SmoothMoves Film Productions Creative Workshop
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Creating Powerful Short Stories
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6">
              A 6-Week Intensive Course in Story Development & Scriptwriting
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-lg">
                <span className="text-primary-foreground/80">Instructor:</span>
                <span className="font-semibold">Demarcus Walker</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <span className="text-primary-foreground/80">Location:</span>
                <span className="font-semibold">In Person</span>
              </div>
              <div className="flex items-center gap-2 text-lg">
                <span className="text-primary-foreground/80">Date & Time:</span>
                <span className="font-semibold">TBA (To Be Announced)</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Interest & Notifications */}
      <section className="container mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <ContactForm />
          <NotificationSignup />
        </div>
      </section>

      {/* Course Overview */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8 shadow-[var(--shadow-medium)] mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Course Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Master the art of short-form storytelling in this comprehensive 6-week workshop. 
              From concept to completion, you'll learn the essential skills needed to craft 
              compelling short stories that translate beautifully to screen. Each week builds 
              upon the last, culminating in a complete short story package ready for production.
            </p>
          </div>

          {/* Weekly Curriculum */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Weekly Curriculum
            </h2>
            <div className="space-y-4">
              {courseWeeks.map((week) => (
                <CourseWeek key={week.weekNumber} week={week} />
              ))}
            </div>
          </div>

          {/* What You'll Achieve */}
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 border-2 border-accent/20 rounded-xl p-8 shadow-[var(--shadow-medium)]">
            <h2 className="text-3xl font-bold text-foreground mb-6">What You'll Achieve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl">✍️</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Complete Script</h3>
                  <p className="text-muted-foreground">A polished 2-3 page screenplay ready for production</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎭</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Rich Characters</h3>
                  <p className="text-muted-foreground">Fully developed characters with depth and motivation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Solid Structure</h3>
                  <p className="text-muted-foreground">A well-paced narrative using proven story frameworks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎬</span>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Visual Plan</h3>
                  <p className="text-muted-foreground">Complete storyboard showing your cinematic vision</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 mt-16">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm opacity-90">
            © 2024 SmoothMoves Film Productions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
