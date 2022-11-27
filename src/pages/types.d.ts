interface JobExperience {
  title: string;
  company: string;
  emoji: string;
  startDate: Date;
  endDate: Date;
  points: string[];
  skills: TechSkill[];
}

type TechSkill =
  | 'React'
  | 'Vue'
  | 'JavaScript'
  | 'TypeScript'
  | 'Node.js'
  | 'MongoDB'
  | 'Sass'
  | 'C#';
