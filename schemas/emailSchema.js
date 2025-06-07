import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email({
    required_error: "Email is required.",
    invalid_type_error: "Email is invalid.",
  }),
});



export default emailSchema;