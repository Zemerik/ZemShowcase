import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AllBlogs } from './Blogs';
import { ProjectsContainer, ProjectsContent, TagButton } from './styles';
import { Container, Title } from '../../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { getProjects } from '../../data/projects';

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
}

export async function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['All']);
  const projects = await getProjects()
  const tags = ['All', ...new Set(projects.flatMap((project: any) => project.tags))];

  /* For Multiple Selection
  const toggleTag = (tag: string) => {
    setSelectedTags(tags =>
      tags.includes(tag) ? tags.filter(t => t !== tag) : [...tags, tag]
    );
  }; 
  */
  const toggleTag = (tag: string) => {
    setSelectedTags([tag]);
  };
}