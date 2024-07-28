import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projects from '../../data/projects';
import { AllBlogs } from './Blogs';
import { ProjectsContainer, ProjectsContent, TagButton } from './styles';
import { Container, Title } from '../../styles/styles';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

interface Projects {
  slug: string;
  url: string;
  title: string;
  type: string;
  img: string;
}

export function Projects() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['All']);
  const tags = ['All', ...new Set(projects.flatMap(project => project.tags.map(tag => tag.name)))];

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