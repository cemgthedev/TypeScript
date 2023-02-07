function showTicket(user: string | null, ticket: number) {
    console.log(`Olá ${user ?? ''}, seu número de bilhete é ${ticket}`);
}

showTicket('Carlos Eduardo', 123);

showTicket(null, 321);