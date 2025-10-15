// Small utility: join class names safely
export function cx(...parts) {
    return parts.filter(Boolean).join(' ')
}