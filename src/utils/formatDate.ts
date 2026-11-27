export function formatDate(
    isoDate: string,
    options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'long', year: 'numeric' },
    locale: string = 'pt-BR'
): string {
    const date = new Date(isoDate);
    if (isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat(locale, options).format(date);
}