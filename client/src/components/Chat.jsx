import React, { useMemo, useRef, useState, useEffect } from "react";
import { sendChat } from "../services/api.js"
import MessageBubble from "./MessageBubble.jsx"
import { SendIcon } from "./Icons.jsx"

export default function Chat() {
    const [messages, setMessages] = useState([
        { id: crypto.randomUUID(), role: "jadoo", content: "Hi! I'm your Jadoo. Ask me anything," },
    ]);

    const [input, setInput] = useState("");
    const [model, setModel] = useState("llama-3.3-70b-versatile");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const listRef = useRef(null);

    const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

    // useEffect(() => {
    //     const el = listRef.current; if (!el) return; el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    // }, [messages, loading]);

    useEffect(() => {
        const el = listRef.current;
        if (!el) return;

        const lastMessage = messages[messages.length - 1];
        // Sirf tab scroll karo jab user ne message bheja ho
        if (lastMessage?.role === "user") {
            el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
        }
    }, [messages]);

    async function handleSend() {
        if (!canSend) return;
        setError("");
        const userMsg = { id: crypto.randomUUID(), role: "user", content: input.trim() };
        setMessages(m => [...m, userMsg]);
        setInput("");
        setLoading(true);
        try {
            const payload = messages.filter(m => m.role !== "error").concat(userMsg).map(({ role, content }) => ({ role, content }));
            const { text } = await sendChat({ model, messages: payload });
            // setMessages(m => [...m, { id: crypto.randomUUID(), role: "jadoo", content: text || "(No Response)" }]);
            const id = crypto.randomUUID();

            setMessages(m => [...m, { id, role: "jadoo", content: "" }]);

            let i = 0;
            const speed = 10; // typing speed

            function type() {
                if (i < text.length) {
                    setMessages(m =>
                        m.map(msg =>
                            msg.id === id
                                ? { ...msg, content: msg.content + text[i] }
                                : msg
                        )
                    );
                    i++;
                    setTimeout(type, speed);
                }
            }

            type();
        } catch (e) {
            const msg = e instanceof Error ? e.message : String(e);
            setMessages(m => [...m, { id: crypto.randomUUID(), role: "error", content: `⚠️ Request failed: ${msg}` }]);
            setError(msg);
        } finally {
            setLoading(false);
        }
    }

    function onKeyDown(e) {
        if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
    }

    function clearChat() {
        setMessages([{ id: crypto.randomUUID(), role: "jadoo", content: "Chat cleared. How can I help now? " }]);
        setError("");
    }

    return (
        <div className="chat">
            {/* <div className="chat__list__inner"> */}
            <div ref={listRef} className="chat__list">
                {messages.map(m => (<MessageBubble key={m.id} role={m.role} text={m.content} />))}
                {loading && (
                    <div className="small" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className="spinner" />Jadoo soch raha hai<span className="dots">...</span> 👽✨
                    </div>
                )}
            </div>
            {/* </div> */}

            <div className="composer">
                <div className="composer__inner">
                    <div className="box">
                        <textarea className="input" rows={1} placeholder="Ask me anything......." value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={onKeyDown} name="" id="" />
                        <div className="toolbar">
                            <div className="small">{error ? "Error - try again" : ""}</div>
                            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                <select value={model} onChange={(e) => setModel(e.target.value)} className="ghost" name="" id="">
                                    <option value="llama-3.3-70b-versatile">Llama 3.3 70B</option>
                                    <option value="llama-3.1-8b-instant">Llama 3.1 8B (Fast)</option>
                                    <option value="gemma2-9b-it">Gemma 2 9B</option>
                                </select>
                                <button className="btn" disabled={!canSend} onClick={handleSend}>
                                    <SendIcon /> {loading ? "Sending......." : "Send"}
                                </button>
                                <button className="btn ghost" onClick={clearChat}>Clear</button>
                            </div>
                        </div>
                    </div>
                    <div className="small" style={{ marginTop: 8 }}>
                        Backend: <code>{import.meta.env.VITE_API_BASE || "/api"}</code> — Powered by Groq
                    </div>
                </div>
            </div>
        </div>
    );
}