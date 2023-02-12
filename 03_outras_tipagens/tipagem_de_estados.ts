// import { useState } from 'react';

type CardProps = {
    time: string,
    name: string
}

type User = {
    name: string,
    years: number
}

/*
export function List({ list }: CardProps[]) {
    const [count, setCount] = useState<number>(0);
    // const [user, setUser] = useState<User>({} as User);

    return (
        <div>
            <h1>Atividades</h1>
            list.map((item) => (
                <div key={ item.time }>
                    <label>Name: { item.name }</label>
                    <p>Time: { item.time }</p>
                    <p>Count: { count }</p>
                    <Button handleCount={setCount} />
                </div>
            ));
        </div>
    );
}
*/