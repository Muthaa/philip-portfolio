"use client";
import QRCode from "qrcode";
import { useEffect, useState } from "react";

export default function DigitalCard() {
    const [qrCode, setQrCode] = useState("");

    useEffect(() => {
        QRCode.toDataURL("https://philip-portfolio-psi.vercel.app/card", {
            width: 220,
            margin: 2,
            errorCorrectionLevel: "H",
        }).then(setQrCode);
    }, []);

    const saveContact = () => {
        const vcard = `BEGIN:VCARD
VERSION:3.0
FN:Philip Kyalo
N:Kyalo;Philip;;;
ORG:Software · Systems · Infrastructure
TEL;TYPE=CELL:+254797330046
EMAIL;TYPE=WORK:philipmuthangya@gmail.com
URL:https://philipkyalo.dev
NOTE:Software engineering, business systems, APIs, mobile applications and infrastructure.
END:VCARD`;

        const blob = new Blob([vcard], {
            type: "text/vcard;charset=utf-8",
        });

        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");

        link.href = url;
        link.download = "Philip-Kyalo.vcf";
        link.click();

        URL.revokeObjectURL(url);
    };

    return (
        <main className="min-h-screen bg-[#090909] px-6 py-10 text-white">
            <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center justify-center">
                <div className="w-full">
                    {/* Header */}
                    <div className="mb-12">
                        <a
                            href="/"
                            className="text-xs uppercase tracking-[0.22em] text-[#76fafc]/50 transition hover:text-white"
                        >
                            Philip Kyalo
                        </a>
                    </div>

                    {/* Identity */}
                    <section>
                        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#76fafc]/50">
                            Software · Systems · Infrastructure
                        </p>

                        <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em]">
                            Philip Kyalo
                        </h1>

                        <p className="mt-6 max-w-sm text-base leading-7 text-white/55">
                            Software engineering, business systems, APIs, mobile
                            applications and infrastructure.
                        </p>
                    </section>

                    {/* Actions */}
                    <section className="mt-12 space-y-3">
                        <button
                            onClick={saveContact}
                            className="flex w-full items-center justify-between border border-white/20 px-5 py-4 text-sm font-medium transition hover:border-white/40 hover:bg-white/5"
                        >
                            <span>Save contact</span>
                            <span aria-hidden="true">↓</span>
                        </button>

                        <a
                            href="/"
                            className="flex w-full items-center justify-between border border-white/10 px-5 py-4 text-sm font-medium text-white/70 transition hover:border-white/25 hover:text-white"
                        >
                            <span>View portfolio</span>
                            <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="https://wa.me/254797330046"
                            target="_blank"
                            rel="noreferrer"
                            className="flex w-full items-center justify-between border border-white/10 px-5 py-4 text-sm font-medium text-white/70 transition hover:border-white/25 hover:text-white"
                        >
                            <span>WhatsApp</span>
                            <span aria-hidden="true">↗</span>
                        </a>

                        <a
                            href="/Philip Kyalo Resume.pdf"
                            download
                            className="flex w-full items-center justify-between border border-white/10 px-5 py-4 text-sm font-medium text-white/70 transition hover:border-white/25 hover:text-white"
                        >
                            <span>Download résumé</span>
                            <span aria-hidden="true">↓</span>
                        </a>
                    </section>

                    {/* Contact */}
                    <section className="mt-12 border-t border-white/10 pt-8">
                        <div className="space-y-4 text-sm">
                            <a
                                href="tel:+254797330046"
                                className="block text-[#76fafc]/55 transition hover:text-white"
                            >
                                +254 797 330 046
                            </a>

                            <a
                                href="mailto:philipmuthangya@gmail.com"
                                className="block text-[#76fafc]/55 transition hover:text-white"
                            >
                                philipmuthangya@gmail.com
                            </a>

                            <a
                                href="https://www.linkedin.com/in/philip-muthangya/"
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[#76fafc]/55 transition hover:text-white"
                            >
                                LinkedIn ↗
                            </a>

                            <a
                                href="https://github.com/Muthaa"
                                target="_blank"
                                rel="noreferrer"
                                className="block text-[#76fafc]/55 transition hover:text-white"
                            >
                                GitHub ↗
                            </a>
                        </div>
                    </section>

                    {/* QR CODE */}
                    <section className="mt-12 border-t border-white/10 pt-8">
                        <div className="flex items-center justify-between gap-6">
                            <div>
                                <p className="text-xs uppercase tracking-[0.18em] text-[#76fafc]/50">
                                    Digital card
                                </p>

                                <p className="mt-3 max-w-[200px] text-sm leading-6 text-white/45">
                                    Scan to view my contact details and portfolio.
                                </p>
                            </div>

                            {qrCode && (
                                <div className="shrink-0 rounded-xl bg-white p-3">
                                    <img
                                        src={qrCode}
                                        alt="QR code linking to Philip Kyalo's digital card"
                                        className="h-32 w-32"
                                    />
                                </div>
                            )}
                        </div>
                    </section>

                    {/* Footer */}
                    <div className="mt-16 border-t border-white/10 pt-6">
                        <p className="text-xs uppercase tracking-[0.16em] text-white/25">
                            Nairobi, Kenya
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}