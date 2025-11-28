'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProjectWizard.module.css';

const questions = [
    {
        id: 'type',
        question: "Wat voor type project betreft het?",
        options: [
            { label: "Scheepsbouw & Reparatie", value: "shipbuilding", icon: "🚢" },
            { label: "Constructiewerk", value: "construction", icon: "🏗️" },
            { label: "Leidingbouw", value: "piping", icon: "🔧" },
            { label: "Anders", value: "other", icon: "✨" }
        ]
    },
    {
        id: 'timeline',
        question: "Wat is de gewenste planning?",
        options: [
            { label: "Spoed (z.s.m.)", value: "urgent" },
            { label: "Binnen 1 maand", value: "1month" },
            { label: "Binnen 3 maanden", value: "3months" },
            { label: "Oriënterend", value: "exploring" }
        ]
    },
    {
        id: 'contact',
        question: "Hoe kunnen we u bereiken?",
        isInput: true
    }
];

export default function ProjectWizard() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});

    const handleOptionSelect = (value) => {
        setAnswers({ ...answers, [questions[step].id]: value });
        if (step < questions.length - 1) {
            setStep(step + 1);
        } else {
            // Submit logic would go here
            alert("Bedankt! We nemen spoedig contact met u op.");
            setIsOpen(false);
            setStep(0);
        }
    };

    return (
        <>
            <button
                id="project-wizard-trigger"
                className={styles.floatingBtn}
                onClick={() => setIsOpen(true)}
            >
                Start Project
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className={styles.modal}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>×</button>

                            <div className={styles.progressBar}>
                                <div
                                    className={styles.progressFill}
                                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                                ></div>
                            </div>

                            <h3 className={styles.question}>{questions[step].question}</h3>

                            <div className={styles.options}>
                                {questions[step].isInput ? (
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        handleOptionSelect(e.target.email.value);
                                    }}>
                                        <input
                                            name="email"
                                            type="email"
                                            placeholder="uw@email.nl"
                                            className={styles.input}
                                            required
                                        />
                                        <button type="submit" className={styles.submitBtn}>Versturen</button>
                                    </form>
                                ) : (
                                    questions[step].options.map((opt) => (
                                        <button
                                            key={opt.value}
                                            className={styles.optionBtn}
                                            onClick={() => handleOptionSelect(opt.value)}
                                        >
                                            <span className={styles.optionIcon}>{opt.icon}</span>
                                            <span className={styles.optionLabel}>{opt.label}</span>
                                        </button>
                                    ))
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
