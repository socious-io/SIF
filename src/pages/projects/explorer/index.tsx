import { Breadcrumbs, Chip, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import Icon from 'src/modules/General/components/Icon';
import Pagination from 'src/modules/General/components/Pagination';
import PaginationMobile from 'src/modules/General/components/PaginationMobile';
import ProjectCard from 'src/modules/Projects/components/ProjectCard';
import variables from 'src/styles/constants/_exports.module.scss';

import { useExplorer } from './useExplorer';

export const Explorer = () => {
  const {
    data: { projects, total, page, totalPage },
    operations: { navigate, onChangePage },
  } = useExplorer();

  return (
    <>
      <img src="/images/explorer-cover.png" alt="Explorer Cover" width="100%" height="100%" />
      <div className="flex flex-col items-stretch gap-6 px-4 py-5 md:p-8">
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<Icon name="chevron-right" fontSize={16} color={variables.color_grey_300} />}
          className="text-sm font-medium"
        >
          <Link to="/">
            <Icon name="home-line" fontSize={20} color={variables.color_grey_500} cursor="pointer" />
          </Link>
          <Link to="/projects/explore" className="text-Gray-light-mode-600">
            Explore
          </Link>
          <Chip
            label="Round 1"
            className="rounded-sm text-sm font-semibold text-Gray-light-mode-700 bg-Gray-light-mode-50"
          />
        </Breadcrumbs>
        <div className="flex flex-col gap-4">
          <span className="text-2xl md:text-3xl font-semibold">Round 1: Empowering Change Makers</span>
          <div className="flex items-center gap-4 text-sm text-Gray-light-mode-600">
            <span>
              Starts on <br className="md:hidden" /> 2024/01/15 00:00 UTC
            </span>
            <span>
              Ends on <br className="md:hidden" /> 2024/01/29 00:00 UTC
            </span>
          </div>
        </div>
        <Divider />
        <div className="flex flex-col gap-8 mt-2 text-lg font-semibold">
          All projects ({total})
          {!!projects.length && (
            <div className="flex flex-wrap mx-[-1.5rem] text-base font-normal">
              {projects.map(project => (
                <ProjectCard
                  key={project.id}
                  {...project}
                  onClick={() => navigate(project.id)}
                  className="w-full md:w-[calc((100%/2)-3rem)] lg:w-[calc((100%/3)-3rem)] mx-6 mb-6"
                />
              ))}
            </div>
          )}
        </div>
        <Divider />
        {!!projects.length && (
          <div className="hidden md:block">
            <Pagination page={page} count={totalPage} onChange={(_, p) => onChangePage(p)} />
          </div>
        )}
        {!!projects.length && (
          <div className="block md:hidden">
            <PaginationMobile page={page} count={totalPage} handleChange={onChangePage} />
          </div>
        )}
      </div>
    </>
  );
};
