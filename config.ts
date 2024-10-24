export type subSkill = {
  name: string,
  stars: number,
}

export type skill = {
  name: string,
  description: string,
  icon: string,
  subSkills: subSkill[],
  color: string,
}

export type experience = {
  icon: string,
  jobTitle: string,
  contractType: string,
  place: string,
  company: string,
  description: string,
  startDate: string,
  endDate: string,
  color: string,
}

export type project = {
  name: string,
  description: string,
  stack: string[],
  image: string,
  link: string,
}
