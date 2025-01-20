import { format } from 'date-fns';


export default function Date({ createTime }) {
  if (!createTime) {
    console.warn('Invalid or missing createTime');
    return <time>Invalid date</time>;
  }

  // Convert the timestamp to milliseconds and create a Date object
  const timestamp = Number(createTime) * 1000; // Convert from seconds to milliseconds
  const date = new Date(timestamp);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    console.warn('Invalid timestamp:', createTime);
    return <time>Invalid date</time>;
  }

  // Format and render the date
  return <time dateTime={date.toISOString()}>{format(date, 'LLLL d, yyyy')}</time>;
}
