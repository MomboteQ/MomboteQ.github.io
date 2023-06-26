'use client';

import { useState } from 'react';
import Image from 'next/image';

import CustomButton from '@/app/components/customButton';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import projects from '@/app/data/projects.json';
import getXnoImage from '@/app/images/get-xno.webp';
import interactiveRatingComponentImage from '@/app/images/interactive-rating-component.webp';
import expensesChartComponentImage from '@/app/images/expenses-chart-component.webp';
import ipLoggerImage from '@/app/images/ip-logger.webp';
import ipLocatorImage from '@/app/images/ip-locator.webp';

const Projects = () => {
    const [selected, setSelected] = useState(0);

    const images = [getXnoImage, interactiveRatingComponentImage, expensesChartComponentImage, ipLoggerImage, ipLocatorImage];

    function selectProject(id) {
        if (id > projects.length - 1) {
            return setSelected(0);
        }

        if (id < 0) {
            return setSelected(projects.length - 1);
        }

        return setSelected(id);
    }

    return (
        <div className="relative max-w-[33rem] mx-auto">
            <span className="left-[-2.3rem] sm:left-[-2.8rem] projects__nav" onClick={() => selectProject(selected - 1)}>
                <FiChevronLeft />
            </span>
            <div className="flex justify-center">
                {projects.map((project, index) => {
                    return (
                        project.id === selected && (
                            <div
                                key={index}
                                className="flex w-full bg-ctp-base rounded-[1.25rem] shadow-[0_0_2rem_rgba(0,0,0,.1)] items-center flex-col animate-[fade_.5s] max-w-[31rem]"
                            >
                                <Image src={images[project.id]} alt="" width={1440} height={900} className="rounded-t-[1.25rem]" />
                                <div className="w-full p-[2rem]">
                                    <h3 className="text-ctp-text font-medium mb-[.3rem] text-[1.3rem] leading-[1.7rem]">{project.name}</h3>
                                    <p className="text-ctp-overlay1 font-medium text-[.65rem] leading-[.9rem] mb-[2rem] md:text-[.8rem] md:leading-[1rem]">
                                        {project.description}
                                    </p>
                                    <CustomButton text={project.button} link={project.link} />
                                </div>
                            </div>
                        )
                    );
                })}
            </div>
            <span className="right-[-2.3rem] sm:right-[-2.8rem] projects__nav" onClick={() => selectProject(selected + 1)}>
                <FiChevronRight />
            </span>
        </div>
    );
};

export default Projects;
