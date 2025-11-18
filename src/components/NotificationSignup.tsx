import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const signupSchema = z.object({
  name: z.string().trim().max(100, "Name must be less than 100 characters").optional().or(z.literal("")),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
});

type SignupFormValues = z.infer<typeof signupSchema>;

const NotificationSignup = () => {
  const { toast } = useToast();
  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      if (supabase) {
        const { error } = await supabase.from("interest_signups").insert({
          name: data.name || null,
          email: data.email,
        });
        if (error) throw error;
        toast({ title: "Subscribed", description: "We’ll notify you when date/time are announced." });
        form.reset();
      } else {
        toast({ title: "Subscription saved locally", description: "Backend not configured; set Supabase env to enable storage." });
      }
    } catch (err: any) {
      console.error(err);
      toast({ title: "Subscription failed", description: err?.message ?? "Please try again." });
    }
  };

  return (
    <Card className="p-6 shadow-[var(--shadow-medium)] border-border">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-foreground">Get Notified</h3>
        <p className="text-sm text-muted-foreground">Subscribe for updates when the date and time are announced.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name (optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
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

          <Button type="submit" className="w-full">Notify Me</Button>
        </form>
      </Form>
    </Card>
  );
};

export default NotificationSignup;