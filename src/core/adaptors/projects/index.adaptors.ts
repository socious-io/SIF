// import { getProjects, getProject } from 'src/core/api';

import { AdaptorRes, Project, ProjectRes } from '..';

export const getProjectsAdaptor = async (page = 1, limit = 10): Promise<AdaptorRes<ProjectRes>> => {
  //   const { items, total } = await getProjects({ page, limit });
  //FIXME: mapping from API to adaptor
  const projects = [
    {
      id: '1',
      coverImg: '/images/explorer-cover.png',
      category: 'Gender Equality',
      title: 'Empowering Women Through Education',
      description:
        'This initiative focuses on providing access to quality education and vocational training for women in underserved communities, empowering them to break the cycle of poverty.',
      creator: { type: 'users', name: 'EduWomen Alliance', img: '' },
    },
    {
      id: '2',
      coverImg: '/images/explorer-cover.png',
      category: 'Food Security',
      title: 'Sustainable Farming Solutions',
      description:
        'This project supports small-scale farmers in adopting sustainable agriculture practices, improving food security, and reducing environmental degradation.',
      creator: { type: 'users', name: 'Alejandro Torres', img: '' },
    },
    {
      id: '3',
      coverImg: '/images/explorer-cover.png',
      category: 'Health',
      title: 'Accessible Healthcare for Remote Communities',
      description:
        'This initiative aims to establish mobile health clinics and telemedicine services in remote areas, providing access to quality healthcare for underserved populations.',
      creator: { type: 'organizations', name: 'HealthReach International', img: '' },
    },
    {
      id: '4',
      coverImg: '/images/explorer-cover.png',
      category: 'Environment and Sustainability',
      title: 'Clean Water for All',
      description:
        'This initiative aims to establish mobile health clinics and telemedicine services in remote areas, providing access to quality healthcare for underserved populations.',
      creator: { type: 'users', name: 'Maria Rodriguez', img: '' },
    },
  ];

  try {
    return {
      data: {
        items: projects,
        page,
        limit,
        total: 4,
      },
      error: null,
    };
  } catch (error) {
    console.error('Error in getting projects List: ', error);
    return { data: null, error: 'Error in getting projects List' };
  }
};

export const getProjectAdaptor = async (projectId: string): Promise<AdaptorRes<Project>> => {
  //   const project = await getProject(id);
  //FIXME: mapping from API to adaptor
  const data = {
    id: '1',
    coverImg: '/images/explorer-cover.png',
    category: 'Gender Equality',
    title: 'Empowering Women Through Education',
    description:
      'This initiative focuses on providing access to quality education and vocational training for women in underserved communities, empowering them to break the cycle of poverty.',
    creator: { type: 'users', name: 'EduWomen Alliance', img: '' },
  };

  try {
    return {
      data,
      error: null,
    };
  } catch (error) {
    console.error('Error in getting project detail: ', error);
    return { data: null, error: 'Error in getting project detail' };
  }
};
