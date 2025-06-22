import type {FormProps} from "@/pages/builder/data-form.tsx";

interface MinimalTemplateProps {
    formData: FormProps
    onSectionEdit: (section: string) => void
    currentPage: number
}

export default function MinimalTemplate({ formData, onSectionEdit, currentPage }: MinimalTemplateProps) {
    const formatDate = (dateString: string) => {
        if (!dateString) return ""
        const date = new Date(dateString)
        return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
    }

    if (currentPage === 1) {
        return (
            <div className="h-full p-12 text-sm">
                {/* Header */}
                <div
                    className="mb-12 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("personal")}
                >
                    <h1 className="text-4xl font-light text-slate-900 mb-2">
                        {formData.firstName} {formData.lastName}
                    </h1>
                    <div className="text-slate-600 space-x-4">
                        <span>{formData.email}</span>
                        <span>•</span>
                        <span>{formData.phone}</span>
                        {formData.location && (
                            <>
                                <span>•</span>
                                <span>{formData.location}</span>
                            </>
                        )}
                    </div>
                </div>

                {/* Professional Summary */}
                <div
                    className="mb-12 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("summary")}
                >
                    <p className="text-slate-700 leading-relaxed text-base">{formData.summary}</p>
                </div>

                {/* Work Experience */}
                <div
                    className="mb-12 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("experience")}
                >
                    <h2 className="text-lg font-light text-slate-900 mb-6 uppercase tracking-widest">Experience</h2>
                    <div className="space-y-8">
                        {formData.workExperience.map((exp, index) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-2">
                                    <h3 className="font-medium text-slate-900">{exp.jobTitle}</h3>
                                    <span className="text-slate-600 text-sm">
                    {formatDate(exp.startDate)} — {exp.current ? "Present" : formatDate(exp.endDate)}
                  </span>
                                </div>
                                <p className="text-slate-700 mb-3">{exp.company}</p>
                                {exp.responsibilities && (
                                    <div className="text-slate-600 leading-relaxed">
                                        {exp.responsibilities.split("\n").map((line, i) => (
                                            <p key={i} className="mb-1">
                                                {line}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div
                    className="cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("education")}
                >
                    <h2 className="text-lg font-light text-slate-900 mb-6 uppercase tracking-widest">Education</h2>
                    <div className="space-y-4">
                        {formData.education.map((edu, index) => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-medium text-slate-900">
                                        {edu.degree} in {edu.field}
                                    </h3>
                                    <span className="text-slate-600 text-sm">{formatDate(edu.graduationDate)}</span>
                                </div>
                                <p className="text-slate-700">{edu.school}</p>
                                {edu.gpa && <p className="text-slate-600">GPA: {edu.gpa}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }

    // Page 2
    return (
        <div className="h-full p-12 text-sm">
            {/* Skills */}
            <div
                className="mb-12 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                onClick={() => onSectionEdit("skills")}
            >
                <h2 className="text-lg font-light text-slate-900 mb-6 uppercase tracking-widest">Skills</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="font-medium text-slate-900 mb-2">Technical</h3>
                        <p className="text-slate-700">{formData.skills.join(", ")}</p>
                    </div>
                    {formData.tools.length > 0 && (
                        <div>
                            <h3 className="font-medium text-slate-900 mb-2">Tools</h3>
                            <p className="text-slate-700">{formData.tools.join(", ")}</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Languages */}
            {formData.languages.length > 0 && (
                <div
                    className="mb-12 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("languages")}
                >
                    <h2 className="text-lg font-light text-slate-900 mb-6 uppercase tracking-widest">Languages</h2>
                    <div className="space-y-2">
                        {formData.languages.map((lang, index) => (
                            <div key={lang.id} className="flex justify-between">
                                <span className="text-slate-900">{lang.language}</span>
                                <span className="text-slate-600 capitalize">{lang.proficiency}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Certifications */}
            {formData.certifications.length > 0 && (
                <div
                    className="mb-12 cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("certifications")}
                >
                    <h2 className="text-lg font-light text-slate-900 mb-6 uppercase tracking-widest">Certifications</h2>
                    <div className="space-y-4">
                        {formData.certifications.map((cert, index) => (
                            <div key={cert.id}>
                                <h3 className="font-medium text-slate-900">{cert.name}</h3>
                                <p className="text-slate-700">{cert.issuer}</p>
                                <p className="text-slate-600">{formatDate(cert.date)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {formData.projects.length > 0 && (
                <div
                    className="cursor-pointer hover:bg-slate-50 p-2 rounded transition-colors"
                    onClick={() => onSectionEdit("projects")}
                >
                    <h2 className="text-lg font-light text-slate-900 mb-6 uppercase tracking-widest">Projects</h2>
                    <div className="space-y-6">
                        {formData.projects.map((project, index) => (
                            <div key={project.id}>
                                <h3 className="font-medium text-slate-900 mb-2">{project.title}</h3>
                                <p className="text-slate-700 mb-2">{project.description}</p>
                                {project.technologies.length > 0 && <p className="text-slate-600">{project.technologies.join(", ")}</p>}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
