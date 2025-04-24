
export function PageHeader({ title, description}: PageHeaderProps) {
    return (
        <div className="flex items-center justify-between pb-6">
            <div>
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">{title}</h1>

                {description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}
