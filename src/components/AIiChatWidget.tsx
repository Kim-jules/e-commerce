"use client";

import React, { useState, useRef } from "react";
import {
  IoChatbubblesSharp,
  IoClose,
  IoArrowUp,
  IoMic,
  IoAttach,
  IoTrashBin,
} from "react-icons/io5";
import { JetBrains_Mono } from "next/font/google";

const jetbrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user"; content: string; files?: File[] }[]
  >([]);
  const [input, setInput] = useState("");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim() && selectedFiles.length === 0) return;

    const userMessage = {
      role: "user" as const,
      content: input,
      files: selectedFiles.length > 0 ? selectedFiles : undefined,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setSelectedFiles([]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    const combinedFiles = [...selectedFiles, ...newFiles].slice(0, 5); // Max 5
    setSelectedFiles(combinedFiles);
    e.target.value = ""; // Reset input to allow re-selection of same files
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const triggerFileSelect = () => {
    if (selectedFiles.length < 5) {
      fileInputRef.current?.click();
    } else {
      alert("Maximum of 5 files allowed.");
    }
  };

  return (
    <>
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-gray-800 text-white p-4 rounded-full shadow-xl hover:bg-gray-800 transition"
      >
        {isOpen ? <IoClose size={24} /> : <IoChatbubblesSharp size={24} />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-[450px] h-[650px] shadow-2xl rounded-2xl flex flex-col z-50 overflow-hidden">
          <div className="bg-gray-800 text-white p-4 font-bold text-lg">
            Rina Ai
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm bg-gray-100">
            {messages.map((msg, i) => (
              <div key={i} className="text-right whitespace-pre-line">
                <span className="inline-block bg-black text-white px-3 py-2 rounded-xl">
                  {msg.content}
                  {msg.files && msg.files.length > 0 && (
                    <ul className="text-xs mt-2 text-gray-200 text-left">
                      {msg.files.map((file, idx) => (
                        <li key={idx}>📎 {file.name}</li>
                      ))}
                    </ul>
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="bg-gray-200 p-2 rounded-2xl">
              <input
                type="text"
                className={`w-full bg-gray-200 rounded-full text-sm outline-none p-2 ${jetbrains_mono.className}`}
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />

              {/* File Previews */}
              {selectedFiles.length > 0 && (
                <div className="flex mt-2 items-center justify-between gap-2">
                  <div className="bg-white rounded-md p-2 shadow-sm space-y-1 text-sm w-full">
                    <div className="flex items-center justify-between text-xs">
                      <span className="truncate max-w-[180px] block overflow-hidden whitespace-nowrap text-ellipsis">
                        📎 {selectedFiles[0].name}
                      </span>

                      <button
                        onClick={() => removeFile(0)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <IoTrashBin size={14} />
                      </button>
                    </div>
                  </div>
                  <div>
                    {selectedFiles.length > 1 && (
                      <span className="text-xs bg-black text-white px-3 py-2 rounded-lg">
                        +{selectedFiles.length - 1}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Buttons Row */}
              <div className="flex justify-between items-center mt-3">
                <div className="flex gap-2 items-center">
                  <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileSelect}
                    className="hidden"
                  />
                  <button
                    onClick={triggerFileSelect}
                    className="bg-gray-400 text-gray-900 px-3 py-3 rounded-full hover:text-white hover:bg-gray-800"
                  >
                    <IoAttach />
                  </button>
                  <button className="bg-gray-400 text-gray-700 px-3 py-3 rounded-full hover:text-white hover:bg-gray-800">
                    <IoMic />
                  </button>
                </div>

                <button
                  onClick={handleSend}
                  className={`bg-black text-white px-3 py-3 rounded-full hover:bg-gray-800 ${jetbrains_mono.className}`}
                >
                  <IoArrowUp />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
