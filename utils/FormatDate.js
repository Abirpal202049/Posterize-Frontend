export default function formatDate(dt) {
    const date = new Date(dt).toString().split(' ');
    //   console.log('date', date)
    return `${date[2]} ${date[1]} ${date[3]}`;
}