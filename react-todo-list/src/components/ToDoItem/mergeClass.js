export default function mergeClass(isItemCompleted = false) {
    const styles = ['todo-item']

    if (isItemCompleted.completed) {
        styles.push('completed')
    }

    return styles.join(" ");
}