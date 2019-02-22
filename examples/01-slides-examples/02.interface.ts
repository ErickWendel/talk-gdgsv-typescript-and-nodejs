interface Employee {
    salary(): string
}

class ProductOwner implements Employee {
    private readonly _value: string = `$100.000`
    salary() : string {
        return this._value
    }
}