import { Card } from './Card';
import { TechCell } from './TechCell';

import '../styles/job-experience.css';

type Props = JobExperience;

const getMonthName = (month: number) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  return monthNames[month];
};

const formatDate = (date: Date) =>
  `${getMonthName(date.getMonth())} ${date.getFullYear()}`;

export default function JobExperience(job: Props) {
  return (
    <Card>
      <div className="job">
        <img src="" alt="" />
        <h2 className="job__title">{job.title}</h2>
        <h3 className="job__company">
          {job.emoji} {job.company}
        </h3>
        <i>
          {formatDate(job.startDate)} - {formatDate(job.endDate)}
        </i>
        <ul className="job__points">
          {job.points.map((point) => (
            <li>
              <p>{point}</p>
            </li>
          ))}
        </ul>
        <ul className="job__skills">
          {job.skills.map((skill, i) => (
            <TechCell key={skill + job.company} tech={skill} />
          ))}
        </ul>
      </div>
    </Card>
  );
}
