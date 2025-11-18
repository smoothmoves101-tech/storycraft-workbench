import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";

const enrollmentSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  experience: z.string().min(1, "Please select your experience level"),
});

type EnrollmentFormValues = z.infer<typeof enrollmentSchema>;

interface EnrollmentFormProps {
  onEnroll: (data: EnrollmentFormValues) => void;
}

const EnrollmentForm = ({ onEnroll }: EnrollmentFormProps) => {
  const form = useForm<EnrollmentFormValues>({
    resolver: zodResolver(enrollmentSchema),
    defaultValues: {
      name: "",
      email: "",
      experience: "",
    },
  });

  const onSubmit = (data: EnrollmentFormValues) => {
    onEnroll(data);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-16">
      <Card className="w-full max-w-2xl p-8 shadow-[var(--shadow-large)]">
        <div className="text-center mb-8">
          <div className="inline-block bg-accent/20 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-accent/30">
            SmoothMoves Film Productions
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Enroll in Creating Powerful Short Stories
          </h1>
          <p className="text-muted-foreground text-lg">
            Start your 6-week journey with Demarcus Walker
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Writing Experience Level</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner - New to storytelling</SelectItem>
                      <SelectItem value="intermediate">Intermediate - Some writing experience</SelectItem>
                      <SelectItem value="advanced">Advanced - Experienced writer</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" size="lg" className="w-full">
              Enroll Now
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default EnrollmentForm;
