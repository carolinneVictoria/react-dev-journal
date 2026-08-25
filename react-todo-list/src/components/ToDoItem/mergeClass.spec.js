describe("./mergeClass.js", () => {
    test('deve retornar a classe do todo-item quando nao estiver completo', () => {
        const isItemCompleted = false;

        const styles = mergeClass(isItemCompleted);

        expect(styles).toBe("todo-item");
    })

    test('deve retornar a classe do todo-item quando estiver completo', () => {
        const isItemCompleted = true;

        const styles = mergeClass(isItemCompleted);

        expect(styles).toBe("todo-item completed");
    })
})