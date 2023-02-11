
/*
* T extends string | number = string. Significa que a função useState trabalha com tipos string ou number.
* Mas se nada for definido por padrão assume o tipo string.
*/
function useState<T extends string | number = string>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newState: T) {
        state = newState;
    }

    return { get, set };
}

let newState = useState();
newState.set('Ok');
// newState.set(123); // erro, pois o tipo padrão é string

let stateNumber = useState<number>();
stateNumber.set(123);
// stateNumber.set('Ok') // erro, pois o tipo foi definido como number