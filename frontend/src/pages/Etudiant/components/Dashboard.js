import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Dashboard.css';
import FlashInfo from './FlashInfo';
import Chat from "./Chat";
import CoursDetail from "./CoursDetail";
import ChapitreDetail from "./ChapitreDetail";

import '../styles/Chapitres.css';

const matièresData = [
    { id: 1, name: "Matière 1" },
    { id: 2, name: "Matière 2" },
    { id: 3, name: "Matière 3" },
    { id: 4, name: "Matière 4" },
    { id: 5, name: "Matière 5" },
    { id: 6, name: "Matière 6" },
];

const chapitresData = {
    1: [
        { id: 1, name: "Chapitre 1", file: "pdf", fileUrl: "/path/to/file1.pdf" },
        { id: 2, name: "Chapitre 2", file: "video", fileUrl: "/path/to/video1.mp4" },
        { id: 3, name: "Chapitre 3", file: "word", fileUrl: "/path/to/file2.docx" },
    ],
    2: [
        { id: 4, name: "Chapitre 1", file: "pdf", fileUrl: "/path/to/file1.pdf" },
        { id: 5, name: "Chapitre 2", file: "video", fileUrl: "/path/to/video1.mp4" },
    ],
    3: [
        { id: 6, name: "Chapitre 1", file: "pdf", fileUrl: "/path/to/file1.pdf" },
        { id: 7, name: "Chapitre 2", file: "word", fileUrl: "/path/to/file2.docx" },
    ],
};

const Dashboard = () => {
    const [selectedMatière, setSelectedMatière] = useState(null);
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [showProfile, setShowProfile] = useState(false);
    const [showFlashInfo, setShowFlashInfo] = useState(false);
    const [showChat, setShowChat] = useState(false);
    const [hasNewChat, setHasNewChat] = useState(false);
    const [hasNewFlash, setHasNewFlash] = useState(false);
    const navigate = useNavigate();

    const notificationSound = new Audio('/son/notification.mp3');

    useEffect(() => {
        const chatInterval = setInterval(() => {
            setHasNewChat(true);
            notificationSound.play();
        }, 10000);

        const flashInterval = setInterval(() => {
            setHasNewFlash(true);
            notificationSound.play();
        }, 15000);

        return () => {
            clearInterval(chatInterval);
            clearInterval(flashInterval);
        };
    }, []);

    const handleMatièreClick = (matière) => {
        setSelectedMatière(matière);
        setSelectedQuiz(null);
        setShowProfile(false);
        setShowFlashInfo(false);
        setShowChat(false);
    };

    const handleQuizClick = () => {
        if (selectedMatière) {
            setSelectedQuiz(selectedMatière.id);
            setSelectedMatière(null);
            setShowProfile(false);
            setShowFlashInfo(false);
            setShowChat(false);
        } else {
            alert("SVP, Choisir une matière");
        }
    };

    const handleProfileClick = () => {
        setSelectedMatière(null);
        setSelectedQuiz(null);
        setShowProfile(true);
        setShowFlashInfo(false);
        setShowChat(false);
    };

    const handleFlashInfoClick = () => {
        setSelectedMatière(null);
        setSelectedQuiz(null);
        setShowProfile(false);
        setShowFlashInfo(true);
        setShowChat(false);
        setHasNewFlash(false);
    };

    const handleChatClick = () => {
        setSelectedMatière(null);
        setSelectedQuiz(null);
        setShowProfile(false);
        setShowFlashInfo(false);
        setShowChat(true);
        setHasNewChat(false);
    };

    const [showEditModal, setShowEditModal] = useState(false);
    const [editName, setEditName] = useState("Ahmed Ben Salah");
    const [editEmail, setEditEmail] = useState("ahmed.bensalah@example.com");
    const [editPhone, setEditPhone] = useState("+216 55 123 456");
    const [editLevel, setEditLevel] = useState("Niveau : 2ème année");
    const [editPhoto, setEditPhoto] = useState("/images/etudiant.jpg");

    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem('studentProfile'));
        if (storedProfile) {
            setEditName(storedProfile.name);
            setEditEmail(storedProfile.email);
            setEditPhone(storedProfile.phone);
            setEditLevel(storedProfile.level);
            setEditPhoto(storedProfile.photo);
        }
    }, []);

    const handleSave = () => {
        const updatedProfile = {
            name: editName,
            email: editEmail,
            phone: editPhone,
            level: editLevel,
            photo: editPhoto
        };
        localStorage.setItem('studentProfile', JSON.stringify(updatedProfile));
        setShowEditModal(false);
    };

    const studentProfile = {
        name: editName,
        email: editEmail,
        phone: editPhone,
        level: editLevel,
        photo: editPhoto,
    };
    

    return (
        <div className="dashboard-container">
            

            {(hasNewChat || hasNewFlash) && (
                <div className="global-notification" onClick={() => {
                    if (hasNewChat) handleChatClick();
                    else if (hasNewFlash) handleFlashInfoClick();
                }}>
                    🔔 Notification
                </div>
            )}

            <div className="content">
                {!selectedMatière && !selectedQuiz && !showProfile && !showFlashInfo && !showChat && (
                    <div className="matières">
                        <h2>Mes Cours</h2>
                        <div className="matières-list">
                            {matièresData.map((matière) => (
                                <button key={matière.id} className="matière-btn" onClick={() => handleMatièreClick(matière)}>
                                    {matière.name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

{selectedMatière && (
                    <div className="chapitres">
                        <h3>{selectedMatière.name} - Chapitres</h3>
                        <ul className="chapitres-list">
                            {chapitresData[selectedMatière.id]?.map((chapitre) => (
                                <li key={chapitre.id} className="chapitre-item">
                                    <span>{chapitre.name}</span>
                                    <button className="voir-btn" onClick={() => navigate(`/chapitre-detail/${chapitre.id}`)}>
                                        Voir les cours
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button className="retour-btn" onClick={() => setSelectedMatière(null)}>Retour aux matières</button>
                    </div>
                )}

                {selectedQuiz && (
                    <div className="quiz">
                        <h3>{matièresData.find(m => m.id === selectedQuiz)?.name} - Quiz</h3>
                        <ul className="quiz-list">
                            {chapitresData[selectedQuiz]?.map((chapitre) => (
                                <li key={chapitre.id} className="quiz-item">
                                    <span>Quiz {chapitre.name}</span>
                                    <button className="start-quiz-btn">Commencer le Quiz</button>
                                </li>
                            ))}
                        </ul>
                        <button className="retour-btn" onClick={() => setSelectedQuiz(null)}>Retour aux matières</button>
                    </div>
                )}

                {showProfile && (
                    <div className="profil">
                        <h2 className="profil-title">Mon Profil</h2>
                        <div className="profil-card enhanced-card">
                            <img src={studentProfile.photo} alt="Profil" className="profil-img enhanced-img" />
                            <div className="profil-infos">
                                <div className="info-line"><span>👤</span><strong>Nom:</strong> {studentProfile.name}</div>
                                <div className="info-line"><span>📧</span><strong>Email:</strong> {studentProfile.email}</div>
                                <div className="info-line"><span>📞</span><strong>Tél:</strong> {studentProfile.phone}</div>
                                <div className="info-line"><span>🎓</span><strong>{studentProfile.level}</strong></div>
                            </div>
                        </div>
                        <button className="modifier-btn" onClick={() => setShowEditModal(true)}>Modifier le profil</button>
                        <button className="retour-btn" onClick={() => setShowProfile(false)}>Retour au menu</button>

                        {showEditModal && (
                            <div className="modal-overlay">
                                <div className="modal">
                                    <h3>Modifier mes informations</h3>
                                    <input type="text" value={editName} onChange={e => setEditName(e.target.value)} />
                                    <input type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} />
                                    <input type="text" value={editPhone} onChange={e => setEditPhone(e.target.value)} />
                                    <input type="text" value={editLevel} onChange={e => setEditLevel(e.target.value)} />
                                    <input type="text" value={editPhoto} onChange={e => setEditPhoto(e.target.value)} />
                                    <div className="modal-buttons">
                                        <button onClick={handleSave}>Enregistrer</button>
                                        <button onClick={() => setShowEditModal(false)}>Annuler</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {showFlashInfo && (
                    <div className="flash-info-wrapper">
                        <FlashInfo />
                        <button className="retour-btn" onClick={() => setShowFlashInfo(false)}>Retour au menu</button>
                    </div>
                )}

                {showChat && (
                    <div className="chat-wrapper">
                        <Chat />
                        <button className="retour-btn" onClick={() => setShowChat(false)}>Retour au menu</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;
