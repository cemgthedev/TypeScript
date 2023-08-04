import { z } from 'zod'

const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}\-\d{2})$/

const PersonSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    bio: z.string().max(500),
    year: z.number(),
    cpf: z.string().regex(cpfRegex),
    birthday: z.string().datetime()
})

interface PersonProps extends z.infer<typeof PersonSchema> { }

const personValidation = PersonSchema.safeParse({
    first_name: "Carlos Eduardo",
    last_name: "Moura Gomes",
    bio: "sua mãe é meu cardio",
    year: 21,
    cpf: "123.328.323-90",
    birthday: "2022-09-18T01:45:16Z"
})

if (personValidation.success) {
    const person: PersonProps = personValidation.data
    console.log("Pessoa validada: ", person);
} else {
    console.log(personValidation)
}