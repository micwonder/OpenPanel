import React from "react";
import clsx from "clsx";
import { Disclosure, Transition } from "@headlessui/react";
import { CommonCircleChevronDown } from "./common-circle-chevron-down";

export const EnterpriseFaq = ({ className }: { className?: string }) => {
    return (
        <div className={clsx("flex flex-col", "not-prose", className)}>
            <div
                className={clsx(
                    "text-2xl landing-sm:text-[32px] landing-sm:leading-[40px]",
                )}
            >
                <h2
                    className={clsx(
                        "font-semibold",
                        "dark:text-gray-400 text-gray-600",
                    )}
                >
                    Frequently Asked Questions
                </h2>
            </div>

            <div
                className={clsx(
                    "flex",
                    "flex-col",
                    "mt-6 landing-sm:mt-12 landing-lg:mt-20",
                    "not-prose",
                )}
            >
                {faq.map((item, index) => {
                    const isLast = index === faq.length - 1;

                    return (
                        <Disclosure key={index}>
                            {({ open }) => (
                                <>
                                    <Disclosure.Button
                                        className={clsx(
                                            "flex items-start justify-between",
                                            "text-start",
                                            "text-base font-semibold",
                                            "dark:text-gray-0 text-gray-900",
                                            "py-3",
                                        )}
                                    >
                                        {item.question}
                                        <CommonCircleChevronDown
                                            className={clsx(
                                                "ml-4",
                                                "flex-shrink-0",
                                                "text-gray-500",
                                                "will-change-transform",
                                                open && "transform rotate-180",
                                                "transition-transform duration-200",
                                            )}
                                        />
                                    </Disclosure.Button>
                                    <Transition
                                        unmount={false}
                                        enter="transition-all duration-300 ease-in-out"
                                        enterFrom="transform opacity-0 max-h-0"
                                        enterTo="transform opacity-100 max-h-[152px]"
                                        leave="transition-all duration-300 ease-in-out"
                                        leaveFrom="transform opacity-100 max-h-[152px]"
                                        leaveTo="transform opacity-0 max-h-0"
                                    >
                                        <Disclosure.Panel
                                            unmount={false}
                                            style={{
                                                display: "block",
                                            }}
                                            className={clsx(
                                                "mt-2 mb-6",
                                                "text-base",
                                                "dark:text-gray-400 text-gray-700",
                                            )}
                                        >
                                            {item.answer}
                                        </Disclosure.Panel>
                                    </Transition>
                                    {!isLast && (
                                        <hr
                                            className={clsx(
                                                "h-[1px]",
                                                "dark:bg-gray-700 bg-gray-200",
                                            )}
                                        />
                                    )}
                                </>
                            )}
                        </Disclosure>
                    );
                })}
            </div>
        </div>
    );
};

const faq = [
    {
        question: "How does the pricing work for the Enterprise edition?",
        answer: "Pricing is per server, not per number of end users.",
    },
    {
        question:
            "Are there any limitations regarding the number of user accounts I can create?",
        answer: "Yes, the Community license allows you to create up to 3 user accounts, and Enterprise edition has no limit to the number of user accounts that you can create.",
    },
    {
        question:
            "Is it possible to upgrade from the Community edition to Enterprise edition?",
        answer: "Yes, at any time you can upgrade your license from Community to Enterprise edition and all limits will imediately be lifted, and additional features added.",
    },
    {
        question:
            "Do you offer trial license for the Enterprise edition?",
        answer: "Yes, we offer a 14 days trial on request.",
    },
    {
        question: "How often does Enterprise edition receive updates?",
        answer: "We aim to introduce new features and fixes in a continuous delivery manner, sometimes as frequently as daily updates. On the other hand, the community edition receives updates on a monthly basis.",
    },
    {
        question:
            "Do you provide custom development services for turnkey projects?",
        answer: "No, we do not offer any type of turnkey development services.",
    },
    {
        question: "What is the scope of the professional services you provide?",
        answer: "Our professional services cover collaborative tasks with internal teams such as onboarding assistance, trainings and customizing your OpenPanel instance to match your brand.",
    },
    {
        question: "Can I request specific features or customizations?",
        answer: "We prioritize feature requests on the product roadmap and also support teams in developing custom integrations and components.",
    },
];
