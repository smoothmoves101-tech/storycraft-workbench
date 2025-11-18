import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WeekData {
  weekNumber: number;
  title: string;
  learningGoals: string[];
  topics: string[];
  activities: string[];
  homework: string;
  finalDeliverable?: string;
}

interface CourseWeekProps {
  week: WeekData;
}

const CourseWeek = ({ week }: CourseWeekProps) => {
  return (
    <Card className="overflow-hidden border-border shadow-[var(--shadow-medium)] hover:shadow-[var(--shadow-large)] transition-shadow duration-300">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value={`week-${week.weekNumber}`} className="border-none">
          <AccordionTrigger className="px-6 py-6 hover:no-underline hover:bg-secondary/50 transition-colors">
            <div className="flex items-center gap-4 text-left">
              <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm font-semibold">
                Week {week.weekNumber}
              </Badge>
              <h3 className="text-xl font-bold text-foreground">{week.title}</h3>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <div className="space-y-6 pt-4">
              {/* Learning Goals */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-accent">🎯</span> Learning Goals
                </h4>
                <ul className="space-y-2">
                  {week.learningGoals.map((goal, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Topics */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-accent">📚</span> Topics
                </h4>
                <ul className="space-y-2">
                  {week.topics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                  <span className="text-accent">✨</span> Activities
                </h4>
                <ul className="space-y-2">
                  {week.activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-accent mt-1">•</span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Homework */}
              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent">📝</span> Homework
                </h4>
                <p className="text-muted-foreground">{week.homework}</p>
              </div>

              {/* Final Deliverable (Week 6 only) */}
              {week.finalDeliverable && (
                <div className="bg-accent/10 rounded-lg p-4 border-2 border-accent">
                  <h4 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <span className="text-accent">🎬</span> Final Deliverable
                  </h4>
                  <p className="text-foreground font-medium">{week.finalDeliverable}</p>
                </div>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  );
};

export default CourseWeek;
