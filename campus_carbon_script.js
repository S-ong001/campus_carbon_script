// 校园碳中和平台 - 本地JavaScript脚本

// 等待DOM加载完成
 document.addEventListener('DOMContentLoaded', function() {
    // 初始化AI算法图表
    initAlgorithmChart();
    
    // 为所有按钮添加交互效果
    addButtonInteractions();
    
    // 添加响应式调整
    setupResponsiveAdjustments();
    
    // 为搜索框添加功能
    setupSearchFunctionality();
});

// 初始化AI算法优化成效图表
function initAlgorithmChart() {
    // 检查ECharts是否已加载
    if (typeof echarts !== 'undefined') {
        try {
            const algoChart = echarts.init(document.getElementById('algorithmChart1'));
            
            // 图表配置
            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { type: 'shadow' }
                },
                grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
                xAxis: {
                    type: 'category',
                    data: ['6月', '7月', '8月', '9月', '10月', '11月'],
                    axisLine: { lineStyle: { color: '#eee' } }
                },
                yAxis: {
                    type: 'value',
                    axisLine: { show: false },
                    splitLine: { lineStyle: { color: '#f5f5f5' } }
                },
                series: [{
                    name: '优化节省公里数',
                    type: 'bar',
                    barWidth: '60%',
                    data: [820, 932, 901, 1340, 1530, 1620],
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#3498db' },
                            { offset: 1, color: '#2ecc71' }
                        ])
                    }
                }]
            };
            
            algoChart.setOption(option);
            
            // 窗口调整时重绘图表
            window.addEventListener('resize', function() {
                algoChart.resize();
            });
            
            console.log('AI算法图表初始化成功');
        } catch (error) {
            console.error('图表初始化失败:', error);
        }
    } else {
        console.warn('ECharts未加载，图表功能将不可用');
    }
}

// 为按钮添加交互效果
function addButtonInteractions() {
    // 为所有主要按钮添加点击效果
    const buttons = document.querySelectorAll('.btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // 添加点击动画效果
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // 根据按钮文本判断功能
            const buttonText = this.textContent.trim();
            
            if (buttonText === '追溯记录') {
                handleBookTrace();
            } else if (buttonText === '立即兑换') {
                handleExchange(this);
            }
        });
    });
}

// 处理书籍追溯功能
function handleBookTrace() {
    const searchInput = document.querySelector('input[placeholder="输入ISBN或书名进行历史追溯..."]');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        // 这里可以添加实际的追溯逻辑
        // 目前只是模拟响应
        alert(`正在追溯: "${searchTerm}" 的区块链记录`);
    } else {
        alert('请输入ISBN或书名');
    }
}

// 处理积分兑换功能
function handleExchange(buttonElement) {
    // 获取兑换项信息
    const itemCard = buttonElement.closest('.card');
    const itemName = itemCard.querySelector('h4').textContent;
    const pointsElement = itemCard.querySelector('.bg-green-100');
    const points = pointsElement.textContent.trim();
    
    // 模拟兑换确认
    if (confirm(`确定要兑换 "${itemName}" (${points}) 吗？`)) {
        alert(`成功兑换: ${itemName}`);
        // 这里可以添加实际的兑换逻辑
    }
}

// 设置响应式调整
function setupResponsiveAdjustments() {
    // 检查窗口大小，调整页面布局
    function adjustLayout() {
        const pageContainers = document.querySelectorAll('.page-container');
        
        if (window.innerWidth <= 768) {
            pageContainers.forEach(container => {
                container.style.width = '100%';
                container.style.borderRadius = '0';
            });
        } else {
            pageContainers.forEach(container => {
                container.style.width = '1440px';
                container.style.borderRadius = '12px';
            });
        }
    }
    
    // 初始调整
    adjustLayout();
    
    // 窗口大小改变时重新调整
    window.addEventListener('resize', adjustLayout);
}

// 设置搜索功能
function setupSearchFunctionality() {
    const searchInput = document.querySelector('input[placeholder="输入ISBN或书名进行历史追溯..."]');
    
    // 添加回车搜索功能
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const searchButton = this.nextElementSibling;
            searchButton.click();
        }
    });
}

// 模拟区块链记录查看功能
function setupBlockchainView() {
    const viewMoreElement = document.querySelector('.text-blue-600.cursor-pointer');
    
    if (viewMoreElement) {
        viewMoreElement.addEventListener('click', function() {
            alert('查看完整区块链记录功能将显示所有交易哈希和验证信息');
        });
    }
}

// 性能优化：延迟加载非关键资源
function lazyLoadResources() {
    // 检查是否需要延迟加载其他资源
    if (window.requestIdleCallback) {
        requestIdleCallback(() => {
            // 这里可以添加延迟加载的代码
        });
    } else {
        setTimeout(() => {
            // 这里可以添加延迟加载的代码
        }, 1000);
    }
}

// 错误处理
function handleErrors() {
    window.onerror = function(message, source, lineno, colno, error) {
        console.error('发生错误:', message, '在', source, '行号:', lineno);
        return true;
    };
}

// 调用错误处理
handleErrors();